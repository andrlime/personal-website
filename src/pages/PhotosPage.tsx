import "./pages.scss";

import Masonry from "react-masonry-css";
import { S3_BUCKET_URL, IMAGE_URLS } from "@/data/photos.ts";

// TODO: Embed alt text in CSV spreadsheet during export
export const PhotosPage: React.FC = () => {
  return (
    <div className="page__body" id="page__404body">
      <Masonry
        breakpointCols={{ default: 4, 1024: 3, 768: 2, 480: 1 }}
        className="page__photogrid"
        columnClassName="page__photogrid__column"
      >
        {IMAGE_URLS
          .sort((_a, _b) => Math.random() - 0.5) // eslint-disable-line @typescript-eslint/no-unused-vars
          .map(img => <img src={`${S3_BUCKET_URL}/${img}`} alt="Image embded on AWS" />)}
      </Masonry>
    </div>
  );
};

export default PhotosPage;
