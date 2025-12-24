import api from "./api";

export type HealthResponse = {
    status: string;
};

export const getHealthStatus = async (): Promise<HealthResponse> => {
    const response = await api.get<HealthResponse>("/health");
    return response.data;
};
