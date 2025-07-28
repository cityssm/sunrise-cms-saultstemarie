export default {
    prints: {
        pdf: {
            'ssm.contract': {
                params: ['contractId'],
                title: 'Contract for Purchase of Interment Rights',
                consignoCloud: {
                    anchors: [
                        {
                            tag: '{{initials1}}',
                            xOffset: 0,
                            yOffset: 5,
                            height: 25,
                            width: 50,
                            page: '3'
                        },
                        {
                            tag: '{{initials2}}',
                            xOffset: 0,
                            yOffset: 5,
                            height: 25,
                            width: 50,
                            page: '3'
                        },
                        {
                            tag: '{{initials3}}',
                            xOffset: 0,
                            yOffset: 5,
                            height: 25,
                            width: 50,
                            page: '3'
                        },
                        {
                            tag: '{{initials4}}',
                            xOffset: 0,
                            yOffset: 5,
                            height: 25,
                            width: 50,
                            page: '3'
                        },
                        {
                            tag: '{{signature1}}',
                            xOffset: 0,
                            yOffset: 5,
                            height: 25,
                            width: 250,
                            page: '3'
                        }
                    ]
                }
            },
            'ssm.contract.burialPermit': {
                params: ['contractId'],
                title: 'Burial Permit'
            }
        }
    }
};
