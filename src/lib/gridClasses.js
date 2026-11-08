// Tailwind's JIT compiler cannot generate CSS for dynamically interpolated
// class names (e.g. `col-span-${n}`), so every possible class must exist as a
// complete literal string somewhere in a scanned file. These lookup tables are
// that single source of truth, shared by the homepage grid and project pages.

export const gridSpanClasses = {
  1: 'col-span-4 md:col-span-1',
  2: 'col-span-4 md:col-span-2',
  3: 'col-span-4 md:col-span-3',
  4: 'col-span-4 md:col-span-4',
  5: 'col-span-4 md:col-span-5',
  6: 'col-span-4 md:col-span-6',
  7: 'col-span-4 md:col-span-7',
  8: 'col-span-4 md:col-span-8',
  9: 'col-span-4 md:col-span-9',
  10: 'col-span-4 md:col-span-10',
  11: 'col-span-4 md:col-span-11',
  12: 'col-span-4 md:col-span-12',
};

export const gridColStartClasses = {
  1: 'md:col-start-1',
  2: 'md:col-start-2',
  3: 'md:col-start-3',
  4: 'md:col-start-4',
  5: 'md:col-start-5',
  6: 'md:col-start-6',
  7: 'md:col-start-7',
  8: 'md:col-start-8',
  9: 'md:col-start-9',
  10: 'md:col-start-10',
  11: 'md:col-start-11',
  12: 'md:col-start-12',
};

export const gridRowStartClasses = {
  1: 'row-start-1',
  2: 'row-start-2',
  3: 'row-start-3',
  4: 'row-start-4',
  5: 'row-start-5',
  6: 'row-start-6',
  7: 'row-start-7',
  8: 'row-start-8',
  9: 'row-start-9',
  10: 'row-start-10',
  11: 'row-start-11',
  12: 'row-start-12',
};

export function getGridSpanClass(span) {
  return gridSpanClasses[span];
}

export function getGridColStartClass(colStart) {
  return gridColStartClasses[colStart] || '';
}

export function getGridRowStartClass(rowStart) {
  return gridRowStartClasses[rowStart] || '';
}
