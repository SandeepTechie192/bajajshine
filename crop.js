import sharp from 'sharp';

async function processImage() {
  try {
    await sharp('./src/assets/logo.png')
      .trim()
      .toFile('./public/logo.png');
    
    await sharp('./src/assets/logo.png')
      .trim()
      .toFile('./src/assets/logo_cropped.png');
      
    console.log("Images cropped successfully!");
  } catch (error) {
    console.error("Error cropping images:", error);
  }
}

processImage();
