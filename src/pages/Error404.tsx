import "./pages.scss";

export const Error404: React.FC = () => {
  return (
    <div className="page__body" id="page__404body">
      <div id="title">404</div>
      <div id="content">This page was not found</div>
    </div>
  );
};

export default Error404;
