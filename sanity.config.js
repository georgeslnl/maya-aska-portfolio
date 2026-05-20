import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { project } from './src/sanity/schemaTypes/project';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'replace-with-project-id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'maya_aska',
  title: 'Maya-Aska Portfolio',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [project],
  },
});
