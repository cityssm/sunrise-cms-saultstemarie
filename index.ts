import type { CustomizationConfig } from 'sunrise-cms-customizations'

export default {
  prints: {
    pdf: {
      'ssm.contract': {
        params: ['contractId'],
        title: 'Contract for Purchase of Interment Rights'
      },

      'ssm.contract.burialPermit': {
        params: ['contractId'],
        title: 'Burial Permit'
      }
    }
  }
} satisfies CustomizationConfig
