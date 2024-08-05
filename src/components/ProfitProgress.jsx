import { Box, CircularProgress, Typography } from "@mui/material";

export const ProfitProgress = () => {
  return (
    <div className="text-[#fff] rounded-xl bg-[#202028] p-[20px] flex gap-[30px]">
      <div>
        <p>Net Profit</p>
        <p className="text-[22px] font-bold mt-[10px]">$ 6759.25</p>
        <div className="flex gap-[10px] mt-[20px]">
          <img width={10} src="/icons/caret-up.svg" alt="" />
          <p className="text-[#6BDD51]">3%</p>
        </div>
      </div>
      <div className="w-[100px] h-[100px]">
        <CircularProgress size={100} color="primary"  variant="determinate" value={75} >
        <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{"70 %"}</Typography>
      </Box>
        </CircularProgress>
      </div>
    </div>
  );
};
