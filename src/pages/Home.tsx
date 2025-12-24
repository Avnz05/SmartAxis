import { useEffect, useState } from "react";
import { getHealthStatus } from "../services/healthService.js";

type HealthResponse = {
    status: string;
};

export default function Home() {
    const [backendStatus, setBackendStatus] = useState<string>("Checking...");
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
        getHealthStatus()
            .then((data: HealthResponse) => {
                setBackendStatus(data.status);
            })
            .catch(() => {
                setBackendStatus("Backend not reachable");
                setHasError(true);
            });
    }, []);

    return (
        <>
            <h1>Home</h1>
            <p>Welcome to SmartAxis.</p>

            <p>
                Backend status:{" "}
                <strong style={{ color: hasError ? "red" : "green" }}>
                    {backendStatus}
                </strong>
            </p>
        </>
    );
}
