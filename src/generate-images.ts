import { globby } from "globby";
import fs from "fs";
import resizeImg from "resize-img";
import path from "path";
import sizeOf from "image-size";

const IMAGE_SIZE_LIST = [
  { width: 1280, height: 1280 },
  { width: 640, height: 640 },
  { width: 320, height: 320 },
];

(async () => {
  const files = await globby("public/images/**/*.{png,jpg,jpeg,bmp}", {
    ignore: ["**/*-[0-9]*-[0-9]*-gen.*"],
  });

  await Promise.all(
    files.flatMap((file): Promise<void>[] => {
      console.log(file);
      const imageSize = sizeOf(file);
      return IMAGE_SIZE_LIST.map(async (size): Promise<void> => {
        const resize = {
          width: size.width,
          height: Math.floor(
            ((imageSize.height ?? size.height) /
              (imageSize.width ?? size.width)) *
              size.width
          ),
        };
        const image = await resizeImg(fs.readFileSync(file), resize);
        const params = path.parse(file);
        fs.writeFileSync(
          path.format({
            ...params,
            base: undefined,
            name: `${params.name}-${resize.width}-gen`,
          }),
          image
        );
      });
    })
  );
})();
