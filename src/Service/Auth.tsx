import { Endpoint } from "../Config/Config";
import { ServiceResponse } from "../Utils/Utli";

// Define User Login Response Type
export interface UserLoginResponseType {
  success: boolean;
  message: string;
  data?: any; // Replace 'any' with a specific type if available
}

// Define Auth Request Body Type
export interface AuthRequest {
    phone: string; // Take from input

}

export const Auth = async (
  body: AuthRequest
): Promise<ServiceResponse<UserLoginResponseType>> => {
  try {
    console.log("Sending API request with body:", body);

    const response = await Endpoint.post("/loginLandLord", body);

    console.log("API Response:", response.data);

    return {
        status: response.data.success,
        message: response.data?.message || "Unknown error occurred",
      response: response.data?.data || null,
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
