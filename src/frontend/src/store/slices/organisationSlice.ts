import CoreModules from '@/shared/CoreModules.js';

const OrganisationSlice = CoreModules.createSlice({
  name: 'organisation',
  initialState: {
    organisationFormData: {},
    organisationData: [],
    postOrganisationData: null,
    organisationDataLoading: false,
    postOrganisationDataLoading: false,
    consentDetailsFormData: {
      give_consent: '',
      review_documentation: [],
      log_into: [],
      participated_in: [],
    },
    consentApproval: false,
    organizationApprovalStatus: {
      isSuccess: false,
      organizationApproving: false,
      organizationRejecting: false,
    },
  },
  reducers: {
    GetOrganisationsData(state, action) {
      state.oraganizationData = action.payload;
    },
    GetOrganisationDataLoading(state, action) {
      state.organisationDataLoading = action.payload;
    },
    postOrganisationData(state, action) {
      state.postOrganisationData = action.payload;
    },
    PostOrganisationDataLoading(state, action) {
      state.postOrganisationDataLoading = action.payload;
    },
    SetOrganisationFormData(state, action) {
      state.organisationFormData = action.payload;
    },
    SetConsentDetailsFormData(state, action) {
      state.consentDetailsFormData = action.payload;
    },
    SetConsentApproval(state, action) {
      state.consentApproval = action.payload;
    },
    SetIndividualOrganization(state, action) {
      state.organisationFormData = action.payload;
    },
    SetOrganizationApproving(state, action) {
      state.organizationApprovalStatus.organizationApproving = action.payload;
    },
    SetOrganizationRejecting(state, action) {
      state.organizationApprovalStatus.organizationRejecting = action.payload;
    },
    SetOrganizationApprovalStatus(state, action) {
      state.organizationApprovalStatus.isSuccess = action.payload;
    },
  },
});

export const OrganisationAction = OrganisationSlice.actions;
export default OrganisationSlice;
