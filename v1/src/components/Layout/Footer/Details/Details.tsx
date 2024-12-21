import css from '@/footer/Details/Details.module.scss';
import {tDetails} from '@/footer/Details/Details.models';

export default function Details(props:tDetails){
    return (
        <div>
            {
                props.brand && 
                <picture>
                    
                </picture>
            }
            <h4></h4>
            <h5></h5>
        </div>
    )
}