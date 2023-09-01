import * as React from 'react';
import admin_1 from "../images/Hari.jpg";
import admin_2 from "../images/charan.jpg";
import admin_3 from "../images/vineeth.jpg";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  adminCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
  },
};

function AdminCard(props) {
  const { adminName, imageUrl, instagramUrl, githubUrl, linkedinUrl } = props;
  return (
    <div style={styles.adminCard}>
      <Avatar src={imageUrl} alt={adminName} style={{ width: "200px", height: "200px" }} />
      <h4 style={{ textAlign: "center", marginTop: 10 }}>{adminName}</h4>
      <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
        <FaInstagram style={{ marginRight: 5 }} />
        <Link href={instagramUrl} target="_blank">Instagram</Link>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
        <FaGithub style={{ marginRight: 5 }} />
        <Link href={githubUrl} target="_blank">GitHub</Link>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
        <FaLinkedin style={{ marginRight: 5 }} />
        <Link href={linkedinUrl} target="_blank">LinkedIn</Link>
      </div>
      
    </div>
  );
}

function Registration() {
  return (
    <div>
      <h5>Our Fabulous Team:</h5>
      <div style={styles.container}>
        <AdminCard
          adminName="Harinadh"
          imageUrl={admin_1}
          instagramUrl="https://www.instagram.com/harinadh_5811/"
          githubUrl="https://github.com/Harinadh5811"
          linkedinUrl="https://www.linkedin.com/in/harinadhkomatineni/"
        />
        <AdminCard
          adminName="Charan Bommisetty"
          imageUrl={admin_2}
          instagramUrl="https://www.instagram.com/charan_bommisetty/"
          githubUrl="https://github.com/charan272003"
          linkedinUrl="https://www.linkedin.com/in/venkata-charan-bommisetty-825236226/"
        />
      <AdminCard
        adminName="Vineeth"
        imageUrl={admin_3}
        instagramUrl="https://www.instagram.com/vineeth._sai._/"
        githubUrl="https://github.com/vineethsai27"
        linkedinUrl="https://www.linkedin.com/in/vineeth-sai-gaddipati-527190226/"
      />
      </div>
   </div>
  );
}

export default Registration;
