export interface Delivery {
    id: string;
    cafid: string;
    barcode: string;
    companyName: string;
    address:{
        street:string,
        number:string
    }
    client: {
        name: string,
        lastName: string
    },
    deliveryEndInfo: {
        appVersion: string,
        evidenceType: string
        location: {
            timestamp: string
        }
        receiver: {
            name: string,
            receiverType: {
                name: string
            },
            document: {
                number: string,
                type: {
                    documentType: string
                }
            }
        }

    }
    url: string
}
