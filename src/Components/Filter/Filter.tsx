import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Slider from '@mui/material/Slider';

import getCategories from '../../Services/api/categories.tsx';

type Anchor = 'top' | 'left' | 'bottom' | 'right';
const anchor: Anchor = 'left';

const brands = [
  "Apple",
  "Samsung",
  "OPPO",
  "Huawei",
  "Microsoft Surface",
  "Infinix",
  "HP Pavilion",
  "Impression of Acqua Di Gio",
  "Royal_Mirage",
  "Fog Scent Xpressio",
  "Al Munakh",
  "Lord - Al-Rehab",
  "L'Oreal Paris",
  "Hemani Tea",
  "Dermive",
  "ROREC White Rice",
  "Fair & Clear",
  "Saaf & Khaas",
  "Bake Parlor Big",
  "Baking Food Items",
  "fauji",
  "Dry Rose",
  "Boho Decor",
  "Flying Wooden",
  "LED Lights",
  "luxury palace",
  "Golden"
];

export default function TemporaryDrawer() {
  const [categories, setCategories] = React.useState<string[]>([]);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<number[]>([20, 37]);
  const [priceRangeOpen, setPriceRangeOpen] = React.useState(false);
  const [priceSort, setPriceSort] = React.useState<'descent' | 'ascent'>('descent');

  const fetchCategories = async () => {
    try {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  React.useEffect(() => {
    fetchCategories();
  }, []);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handlePriceRangeToggle = () => {
    setPriceRangeOpen(!priceRangeOpen);
  };

  const handlePriceSort = () => {
    setPriceSort(priceSort === 'descent' ? 'ascent' : 'descent');
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div>
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
      >
        <List>
          {['Price', 'Price range', 'Category', 'Brand'].map((text, index) => (
            <React.Fragment key={text}>
              {index === 0 ? (
                <React.Fragment>
                  <ListItem disablePadding button onClick={handleToggle}>
                    <ListItemIcon>
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem disablePadding button onClick={handlePriceSort}>
                        <ListItemIcon>
                          {priceSort === 'descent' ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={priceSort === 'descent' ? 'Sort by Price (Descent)' : 'Sort by Price (Ascent)'} />
                      </ListItem>
                    </List>
                  </Collapse>
                </React.Fragment>
              ) : index === 1 ? (
                <React.Fragment>
                  <ListItem disablePadding button onClick={handlePriceRangeToggle}>
                    <ListItemIcon>
                      {priceRangeOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                  <Collapse in={priceRangeOpen} timeout="auto" unmountOnExit>
                    <Slider
                      getAriaLabel={() => 'Temperature range'}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={(value) => `${value}`}
                    />
                  </Collapse>
                </React.Fragment>
              ) : index === 2 ? (
                <React.Fragment>
                  <ListItem disablePadding button onClick={handleToggle}>
                    <ListItemIcon>
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {categories.map((category) => (
                        <ListItem key={category} disablePadding>
                          <ListItemText primary={category} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>
              ) : index === 3 ? (
                <React.Fragment>
                  <ListItem disablePadding button onClick={handleToggle}>
                    <ListItemIcon>
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {brands.map((brand) => (
                        <ListItem key={brand} disablePadding>
                          <ListItemText primary={brand} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>
              ) : (
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )}
              {index < 3 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </div>
  );
}
