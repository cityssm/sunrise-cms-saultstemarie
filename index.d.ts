declare const _default: {
    prints: {
        pdf: {
            'ssm.contract': {
                params: "contractId"[];
                title: string;
                consignoCloud: {
                    anchors: {
                        tag: string;
                        xOffset: number;
                        yOffset: number;
                        height: number;
                        width: number;
                        page: string;
                    }[];
                };
            };
            'ssm.contract.burialPermit': {
                params: "contractId"[];
                title: string;
            };
        };
    };
};
export default _default;
