import { useRef } from 'react';
import { useSprings, animated, config } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import clamp from 'lodash.clamp';
import swap from 'lodash-move';

import styles from './styles.module.css'

interface DraggableListProps {
    items: JSX.Element[] | string[];
    multiplier: number;
}

const DraggableList: React.FC<DraggableListProps> = ({ items, multiplier }) => {
    const fn =
    (order: number[], active = false, originalIndex = 0, curIndex = 0, y = 0) =>
        (index: number) =>
            active && index === originalIndex
                ? {
                    y: curIndex * multiplier + y,
                    scale: 1.025,
                    zIndex: 1,
                    shadow: 15,
                    immediate: (key: string) => key === 'zIndex',
                    config: (key: string) => (key === 'y' ? config.stiff : config.default),
                }
                : {
                    y: order.indexOf(index) * multiplier,
                    scale: 1,
                    zIndex: 0,
                    shadow: 1,
                    immediate: false,
                };

    const order = useRef(items.map((_, index) => index))
    const [springs, api] = useSprings(items.length, fn(order.current))
    const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
        const curIndex = order.current.indexOf(originalIndex)
        const curRow = clamp(Math.round((curIndex * multiplier + y) / multiplier), 0, items.length - 1)
        const newOrder = swap(order.current, curIndex, curRow)
        api.start(fn(newOrder, active, originalIndex, curIndex, y))
        if (!active) order.current = newOrder
    })

    return (
        <div className={styles.content} style={{ width: '200px'}}>
            {springs.map(({ zIndex, shadow, y, scale }, i) => (
                <animated.div
                    {...bind(i)}
                    key={i}
                    style={{
                        zIndex,
                        boxShadow: shadow.to(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
                        y,
                        scale,
                    }}
                    children={items[i]}
                />
            ))}
        </div>
    )
}

export default DraggableList;