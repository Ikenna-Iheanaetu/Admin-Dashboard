import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined
} from "@mui/icons-material";
import FlexBetween from "./flexBetween";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMode } from "../redux/index";
import borutoImage from "../assets/boruto.png";
import {
  AppBar,
  useTheme,
  Toolbar,
  InputBase,
  IconButton,
  Button,
  Box,
  Typography,
  MenuItem,
  Menu
} from "@mui/material";

export default function Navbar({ user, isSideBarOpen, setIsSideBarOpen }) {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [anchorEL, setAnchorEL] = useState(null);

  const isOpen = Boolean(anchorEL);

  const handleClick = (event) => {
    setAnchorEL(event.currentTarget)
  };
  const handleClose = () => setAnchorEL(null);

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        {/* Left Side */}
        <FlexBetween>
          <IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            padding=".1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* Right Side */}
        <FlexBetween gap=".6rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>

          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                component="img"
                alt="profile-image"
                src={borutoImage}
                height="2.6rem"
                width="2.6rem"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize=".85rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontWeight="bold"
                  fontSize=".75rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: "2rem" }}
              />
            </Button>
            <Menu anchorEL={anchorEL} open={isOpen} close={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
              <MenuItem onClick={handleClick}>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
}
