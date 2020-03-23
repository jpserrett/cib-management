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

export type Cib5Type = {
    edition: number,
    nsn: string,
    prodStatus: string,
    producer: string,
    classification: string,
    cellCurrencyYear: number,
    prodDate?: number,
    gatewayLoadDate?: number,
    shippedToGatewayDate?: number,
    cib1s: []
}

export type CandidateProgramType = {
    cib5s: [],
    cib1s: Cib1Type[],
    cib5Bundles: [],
    volumesAllocated: number,
    volumesProduces: number,
    quartersAllocated: number,
    quartersProduced: number,
    budgetUsed: string,
    budgetOrdered: string,
    budgetCompleted: string,
    orderNumber: string
  }

export type Cib5BundleType = {
    edition: number,
    nsn: string,
    prodStatus: string,
    producer: string,
    classification: string,
    cellCurrencyYear: number,
    prodDate?: string,
    gatewayLoadDate?: string,
    shippedToGatewayDate?: string,
    cib5s: []
  }
