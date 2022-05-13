import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer T4-KC4355rjxRJLLYXtoJ5O5sY8Wv_WVLC_hFk9v5FbHgchxYcRDKpaMHit_tkB4xxTlUrrLhhmdhsrfAHtc2AOUoRJm_r3FDMciksMOaYKPSC3Ae1XVNN_kGIZ8YnYx",
  },
});
