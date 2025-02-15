import { Button, DivDescription, DivImg, DivInput, DivLine, FlexCollCenter, ForgotPassword, IconEye, Img, Input, InputIcon, Label, LinkText, MainContainer } from "./styles";
import loginImg from '../../assets/icons/login.png'
import emailIcon from '../../assets/icons/email.png'
import passwordIcon from '../../assets/icons/password.png'
//import googleIcon from '../../assets/icons/google.png'
//import githubIcon from '../../assets/icons/github.png'
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import closedEyeIcon from '../../assets/icons/closedEye.png';
import openEyeIcon from '../../assets/icons/openEye.png';
import { UserContext } from "../../Context/UserContext";
import useUserLogin from "../../utils/userLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const { handleLogin, loading } = useUserLogin();

    const { isSessionValid } = useContext(UserContext);
  
  useEffect(() => { 
    if (isSessionValid()) {
      navigate("/home");
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <MainContainer>
      <FlexCollCenter>
        <DivImg>
          <Img src={loginImg} alt="Login Image" />
        </DivImg>

        <DivDescription>
          <h3>Entre com seu E-mail</h3>
          <p>
          Acompanhe seu impacto ambiental, otimize seus hábitos diários e descubra novas formas de viver de maneira mais sustentável. 🌿
          </p>
        </DivDescription>
      </FlexCollCenter>

      <FlexCollCenter>
        <form onSubmit={login}>
          <Label htmlFor="email">E-mail</Label>
          <DivInput>
            <Input type="email" placeholder="Email" name="email" required onChange={e => setEmail(e.target.value)} />
            <InputIcon src={emailIcon} alt="Email Icon" />
          </DivInput>

          <Label htmlFor="password">Senha</Label>
          <DivInput>
            <Input type={showPassword ? "text" : "password"} placeholder="Senha" name="password" required onChange={e => setPassword(e.target.value)} />
            <InputIcon src={passwordIcon} alt="Password Icon" />
            <IconEye
              src={showPassword ? openEyeIcon : closedEyeIcon}
              alt="Toggle password visibility"
              onClick={togglePasswordVisibility}
              style={{ cursor: "pointer" }} 
            />
          </DivInput>

          <ForgotPassword>Esqueceu a senha?</ForgotPassword>

          <Button type="submit" disabled={!!loading}>
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </FlexCollCenter>

    
      <FlexCollCenter>
      {/*
        <span>Ou entre com:</span>

        <SocialLoginContainer>
          <DivImg>
            <SocialIcon src={googleIcon} alt="Google" />
          </DivImg>

          <DivImg>
            <SocialIcon src={githubIcon} alt="Github" />
          </DivImg>
        </SocialLoginContainer>
        */}

        <DivLine>
          <p>
            Você não tem uma conta?  
            <LinkText to='/register'>Crie uma conta aqui</LinkText>
          </p>
        </DivLine>
        
      </FlexCollCenter>
    </MainContainer>
  );
};

export default Login;