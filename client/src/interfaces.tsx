// interfaces that are shared should be defined here and imported as needed

export interface UserInfo {
    name: string,
    email: string,
    role: string
}

export type Cib1Type = {
    edition: number,
    nsn: string,
    prodStatus: string,
    producer: string,
    classification: string,
    cellCurrencyYear: number,
    prodDate?: number,
    gatewayLoadDate?: number,
    shippedToGatewayDate?: number,
    nwCoord: number,
    neCoord: number,
    swCoord: number,
    seCoord: number
}
