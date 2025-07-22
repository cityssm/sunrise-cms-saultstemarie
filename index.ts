import type { CustomizationConfig } from 'sunrise-cms-customizations'

export default {
  prints: {
    pdf: {
      contract: {
        params: ['contractId'],
        title: 'Contract for Purchase of Interment Rights (SSM)'
      },

      'contract.burialPermit': {
        params: ['contractId'],
        title: 'Burial Permit (SSM)'
      }
    }
  }
} satisfies CustomizationConfig
