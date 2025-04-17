import type { WifiPlugin } from '../../src/definitions';
export declare class Wifi implements WifiPlugin {
    constructor();
    getIP(): Promise<{
        ip: string;
    }>;
    getSSID(): Promise<{
        ssid: string | null;
    }>;
    connect(options: {
        ssid: string;
        password?: string;
    }): Promise<{
        ssid: string | null;
    }>;
    connectPrefix(options: {
        ssid: string;
        password?: string;
    }): Promise<{
        ssid: string | null;
    }>;
    disconnect(): Promise<void>;
    private checkConnection;
    private timeout;
    private insertSelect;
    private reconnect;
}
