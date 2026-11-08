'use client';
import { motion } from 'framer-motion';
import usePageTurnSound from '@/app/hooks/usePageTurnSound';

export default function FadeUp({ children, className, playSound = false }) {

    const play = usePageTurnSound();

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
