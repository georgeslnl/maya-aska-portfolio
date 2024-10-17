'use client';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import pageTurn from '../sounds/page_turn.mp3';

export default function FadeUp({ children, className, playSound = false }) {

    const [play] = useSound(pageTurn);

    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 90 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 1.2 }}
            onHoverStart={playSound ? play : null}
        >
            {children}
        </motion.div>
    )

}