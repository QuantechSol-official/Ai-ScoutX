import { useThemeContext } from 'app/contexts/theme/context';
import logoSmallDark from 'assets/logo-sm-dark.png';
import logoSmallLight from 'assets/logo-sm-light.png';
const ShortLogo = () => {
    const {
        isDark,
      } = useThemeContext();
  return (
    <img src={isDark ? logoSmallLight : logoSmallDark} alt='logo-small' height={200} width={200}/>
  )
}

export default ShortLogo
