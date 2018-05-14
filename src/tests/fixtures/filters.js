import moment from 'moment';

const filters = {
  text: '',
  sort: 'date',
  startDate: undefined,
  endDate: undefined
};

const altFilters = {
  text: '',
  sort: 'text',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days')
};

export { filters, altFilters };
