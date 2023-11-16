import api from '../utils/api'

const Schedule = {}

Schedule.getSchedule = function (startDate, endDate) {
  const params = {
    met: 'Fixtures',
    action: 'POST',
    APIkey: 'b3be2b8489c5549365045c45ba307314d036a5c6aed78f9d96f89aaabc7fccfe',
    from: startDate,
    to: endDate,
    leagueId: 766,
    timezone: 'America/New_York',
  };
  return api({
    method: 'post',
    url: '',
    data: params,
  });
};

export default Schedule;
