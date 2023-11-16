import api from '../utils/api'

const Autopay = {}

Autopay.AutoPayEmployerJobtitle = function () {
  return api({
    method: 'get',
    url: 'auto-pay/get-ui-params/',
  });
};

export default Autopay;
