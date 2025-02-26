import { Endpoint } from "../Config/Config";
import { ServiceResponse } from "../Utils/Utli";

// Define User Login Response Type
export interface UserLoginResponseType {
  success: boolean;
  message: string;
  data?: any; 
}

// Define Auth Request Body Type
export interface AuthRequest {
  strCustomerName: string; // Take from input
  StrMobileNo: string; // Take from input
  strEmailId: string; // Take from input
  strPassword: string; // Take from input
  strOTPNUMBER?: string; // Can be empty
  isSendSMS: boolean; // Set false
  strStatus?: string; // Can be left empty
  iCompanyID: string; // Fixed "1"
  iBranchID: string; // Fixed "1"
  accessCode: string; // Fixed "34JSVTP"
}

export const Auth = async (params: AuthRequest): Promise<ServiceResponse<UserLoginResponseType>> => {
  try {
    // Convert object to query string
    const queryString = new URLSearchParams(params as unknown as Record<string, string>).toString();

    console.log("API Request:", `WebInsertAppCustomer?${queryString}`);

    // Send GET request with query parameters
    const response = await Endpoint.get(`WebInsertAppCustomer?${queryString}`, {
        
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    console.log("API Response:", response.data);

    return {
      status: response.data[0]?.Result ?? false,
      message: response.data[0]?.Message || "Login successful",
      response: response.data[0] || null,
    };
  } catch (error: any) {
    console.error("API Error:", error);

    return {
      status: false,
      message: error?.response?.data?.message || "API request failed. Please try again.",
      response: null,
    };
  }
};
