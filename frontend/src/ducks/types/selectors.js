export const selectTypes = (state) => state.types.types;
export const selectTypesMap = (state) => state.types.typesMap;
export const selectType = (state, props) => state.types.typesMap[props.match.params.id] || { };

export const selectTypesSelectOptionsMap = (state) => state.types.selectOptionsMap;
export const selectTypesSelectOptions = (state) => state.types.selectOptions;

export const selectTypesLoading = (state) => state.types.loading;
