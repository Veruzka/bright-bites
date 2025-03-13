import React, { useState } from "react";
import * as Tooltip  from "@radix-ui/react-tooltip";
import * as Icons from "phosphor-react";
import { House } from "phosphor-react";
import './bb_iconbutton.css';
import { motion } from "framer-motion";

interface BB_IconButtonProps {
  icon: keyof typeof Icons;
  tooltipText: string;
}

const IconButton: React.FC<BB_IconButtonProps> = ({icon, tooltipText}) => {
  const IconComponent = (Icons[icon] as React.ElementType) || House;
  const [selected, setSelected] = useState(false);

	return (
		<Tooltip.Provider delayDuration={0}>
			<Tooltip.Root>
				<Tooltip.Trigger asChild>
          <motion.button
              className={`IconButton ${selected ? "selected" : ""}`} 
              onClick={() => setSelected(!selected)}
              whileHover={{
                backgroundColor: "#F5F5F5",
                color: "#060A23",
                transition: { type: "spring", stiffness: 500, damping: 60, mass: 1 },
              }}
            >
              {IconComponent ? <IconComponent size={24} /> : <House size={24} />}
            </motion.button>
				</Tooltip.Trigger>
				<Tooltip.Portal>
                    <motion.div 
                      
                      initial={{ opacity: 0, x: -5 }}  // Start slightly to the left and invisible
                      animate={{ opacity: 1, x: 8 }}   // Fade in and move to position
                      exit={{ opacity: 0.3, x: -5 }}    // Fade out and slide back
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
					<Tooltip.Content className="TooltipContent" side="right">
            {tooltipText ?? "Homepage"}
					</Tooltip.Content>
                </motion.div>
				</Tooltip.Portal>
			</Tooltip.Root>
		</Tooltip.Provider>
	);
};

export default IconButton;