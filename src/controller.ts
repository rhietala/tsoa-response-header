import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Res,
  Route,
  SuccessResponse,
  TsoaResponse,
} from "tsoa";

interface ResponseHeaders {
  /**
   * Pagination uses Link header as defined in RFC5988
   */
  Link: string;
}

@Route("/")
export class FooController extends Controller {
  @Get()
  public async get(
    @Res() failed: TsoaResponse<400, string, ResponseHeaders>
  ): Promise<number> {
    if (false) {
      failed(400, "failure", { Link: "" });
    } else {
      this.setHeader("Link", '<https://localhost:3000/?page=2>; rel="next"');
      return 1;
    }
  }
}
