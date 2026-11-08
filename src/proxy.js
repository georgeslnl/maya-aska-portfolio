const encoder = new TextEncoder();


function timingSafeEqual(a, b) {
  const maxLength = Math.max(a.length, b.length);
  let mismatch = a.length ^ b.length;
  for (let i = 0; i < maxLength; i += 1) {
    mismatch |= (a[i] ?? 0) ^ (b[i] ?? 0);
  }
  return mismatch === 0;
}

function parseBasicAuth(header) {
  const match = /^Basic ([A-Za-z0-9+/=]+)$/.exec(header ?? '');
  if (!match) return null;

  let decoded;
  try {
    decoded = atob(match[1]);
  } catch {
    return null;
  }

  const separator = decoded.indexOf(':');
  if (separator < 0) return null;

  return {
    user: decoded.slice(0, separator),
    pass: decoded.slice(separator + 1),
  };
}

function unauthorized() {
  return new Response('Unauthorized', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Maya-Aska Studio", charset="UTF-8"',
    },
  });
}

export function proxy(request) {
  const isProduction = process.env.NODE_ENV === 'production';
  const username = process.env.STUDIO_USERNAME;
  const password = process.env.STUDIO_PASSWORD;

  if (!isProduction) {
    // Reachable locally without credentials — keep the developer loop fast.
    return;
  }

  if (!username || !password) {
    // Fail closed: /studio must not be publicly reachable in production.
    return new Response(null, { status: 404 });
  }

  const credentials = parseBasicAuth(request.headers.get('authorization'));
  const userOk = timingSafeEqual(
    encoder.encode(credentials?.user ?? '_'),
    encoder.encode(username)
  );
  const passOk = timingSafeEqual(
    encoder.encode(credentials?.pass ?? '_'),
    encoder.encode(password)
  );

  if (userOk && passOk) {
    return;
  }

  return unauthorized();
}

export const config = {
  matcher: ['/studio/:path*'],
};
