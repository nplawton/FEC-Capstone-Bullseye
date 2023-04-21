import http from 'k6/http';
import { check, sleep, group, fail } from 'k6';


export const options={

    stages: [
        {duration: '15s', target: 160},
        {duration: '30s', target: 160},
        {duration: '15s', target: 0},
    ],

    thresholds: {
        http_req_duration: ['p(90)<2500'],
    },
};


export default function (){
    http.get('http://localhost:8000/products');
    sleep(1);
}