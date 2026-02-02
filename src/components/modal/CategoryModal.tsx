import { Grid3x3 } from "lucide-react";
import { motion } from "motion/react";

export function CategoryModal() {
    return (
        <div className="space-y-6">
            <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <Grid3x3 size={48} className="text-white/50 mx-auto mb-4" />
                <p className="text-white/80 text-lg">카테고리 기능 준비 중입니다</p>
                <p className="text-white/50 text-sm mt-2">곧 구현될 예정입니다</p>
            </motion.div>
        </div>
    );
}
