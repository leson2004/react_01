import { Button, Result } from "antd";
import { useRouteError, Link } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page">
      {/* <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <div>
          <Link to="/">
            <span>come back homepage </span>
          </Link>
        </div>
      </div> */}
      <Result
        status="403"
        title="Oops!"
        subTitle={<i>{error.statusText || error.message}</i>}
        extra={
          <Button type="primary">
            <Link to="/">
              <span>come back homepage </span>
            </Link>
          </Button>
        }
      />
    </div>
  );
}
