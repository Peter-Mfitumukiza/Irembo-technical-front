
export interface ImportRequestFormData {
  ownerDetails: {
    citizenship: string;
    phoneNumber: number;
    email: string;
    address: string;
  };
  businessDetails: {
    businessType: string;
    companyName: string;
    tinNumber: number;
    registrationDate: Date;
    businessAddress: string;
  };
  productDetails: {
    importationPurpose: string;
    productCategory: string;
    weight: number;
    measurementUnit: string;
    productQuantity: string;
    productDescription: string;
  };
}
