import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageDir = path.join(process.cwd(), 'src/Pages/images');

async function optimizeImages() {
  const files = fs.readdirSync(imageDir);
  for (const file of files) {
    if (file.match(/\.(png|jpe?g)$/i)) {
      const inputPath = path.join(imageDir, file);
      const parsed = path.parse(file);
      const outputPath = path.join(imageDir, `${parsed.name}.webp`);
      
      console.log(`Optimizing ${file}...`);
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      // Optionally delete original to enforce usage
      // fs.unlinkSync(inputPath);
    }
  }
  console.log('Done optimizing images.');
}

optimizeImages().catch(console.error);
