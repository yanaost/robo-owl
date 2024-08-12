import robot from '../../iconRobot.svg';
import arrowUp from '../../arrow_drop_up.svg';
import arrowDown from '../../arrow_drop_down.svg';
import arrowLeft from '../../arrow_left.svg';
import arrowRight from '../../arrow_right.svg';
import './Robot.css';
import { Direction } from '../../types/Direction';

type Props = {
    direction: Direction
}

export const Robot: React.FC<Props> = ({direction}) => {
    return (
        <>
            <img
                className='robot'
                src={robot}
                alt='roboOwl'
            />

            <div className='arrowsContainer'>
                {direction === Direction.up && <img 
                    className='arrow arrowUp' 
                    src={arrowUp}
                    alt='arrowUp'
                />}

                {direction === Direction.down && <img 
                    className='arrow arrowDown' 
                    src={arrowDown}
                    alt='arrowDown'
                />}

                {direction === Direction.left && <img 
                    className='arrow arrowLeft' 
                    src={arrowLeft}
                    alt='arrowLeft'
                />}

                {direction === Direction.right && <img 
                    className='arrow arrowRight' 
                    src={arrowRight}
                    alt='arrowRight'
                />}
            </div>
        </>
    )
}
