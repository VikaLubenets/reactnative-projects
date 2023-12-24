import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer G_aVmexfD-h8GJ3iuuUm2Mq8CHO5stT8A9zVnPFhUlwesVe6OduLIYjSorwLgWxnurytck98W9DMmwdgQp9Ey4WC6Q-YnTCZ0UornkHvLYAXTC12EV-2DHJ1D_F7ZXYx'
  }
});