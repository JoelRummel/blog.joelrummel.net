import { useTheme, Typography } from "@mui/material";
import Content from "./Content";

const useStyles = ((theme) => ({
    bg: {
        // backgroundColor: theme.palette.primary.main
    }
}));

const Home = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <Content />
    );
};

export default Home;
