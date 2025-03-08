import fs from 'fs';
import path from 'path';

export async function GET(req) {
  const { component } = req.nextUrl.searchParams;
  if (!component) {
    return new Response(JSON.stringify({ error: 'Component query parameter is required' }), { status: 400 });
  }

  const filePath = path.join(process.cwd(), 'components', `${component}.jsx`);
  console.log(`Requesting code for component: ${component}`);
  console.log(`Resolved file path: ${filePath}`);

  try {
    // Check if the file exists before attempting to read it
    if (fs.existsSync(filePath)) {
      const code = fs.readFileSync(filePath, 'utf8');
      return new Response(JSON.stringify({ code }), { status: 200 });
    } else {
      console.error(`Component file not found: ${filePath}`);
      return new Response(JSON.stringify({ error: 'Component not found' }), { status: 404 });
    }
  } catch (error) {
    console.error('Error reading the component file:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}
