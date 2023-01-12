import { StyledFooter } from "./style"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-container">
        <span>Created By: <span id="name">Daniel Moreno</span></span>
        <div>
          You cand find me in:
          <div>
            <a href="">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/DanielMM161">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </StyledFooter>
  )
}