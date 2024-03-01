
import axios from "axios";

export class ImportProductService {

  async sendRequestDetailsToEmail(body: any) {
    let response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/import-request/send-email`,
      body
    );

    return response.data;
  }
}
