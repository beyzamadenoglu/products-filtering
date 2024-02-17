import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Slider from '@mui/material/Slider';

import getCategories from '../../Services/api/categories.tsx';

import './Filter.scss';

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
  const [openPrice, setOpenPrice] = React.useState(false);
  const [openPriceRange, setOpenPriceRange] = React.useState(false);
  const [openCategory, setOpenCategory] = React.useState(false);
  const [openBrand, setOpenBrand] = React.useState(false);
  const [value, setValue] = React.useState<number[]>([20, 37]);
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

  const handlePriceToggle = () => {
    setOpenPrice(!openPrice);
  };

  const handlePriceRangeToggle = () => {
    setOpenPriceRange(!openPriceRange);
  };

  const handleCategoryToggle = () => {
    setOpenCategory(!openCategory);
  };

  const handleBrandToggle = () => {
    setOpenBrand(!openBrand);
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
        className="filter-sidebar"
      >
        <List>
          <React.Fragment>
            <ListItem disablePadding>
              <ListItemButton
                selected={openPrice}
                onClick={handlePriceToggle}
              >
                <ListItemText primary="Price" />
                {openPrice ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={openPrice} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem disablePadding>
                  <ListItemButton onClick={handlePriceSort}>
                    <ListItemText primary={priceSort === 'descent' ? 'Sort by Price (Descent)' : 'Sort by Price (Ascent)'} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Collapse>
          </React.Fragment>
          <Divider />
          <React.Fragment>
            <ListItem disablePadding>
              <ListItemButton
                selected={openPriceRange}
                onClick={handlePriceRangeToggle}
              >
                <ListItemText primary="Price range" />
                {openPriceRange ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={openPriceRange} timeout="auto" unmountOnExit>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={(value) => `${value}`}
                max={1000} min={0}
              />
            </Collapse>
          </React.Fragment>
          <Divider />
          <React.Fragment>
            <ListItem disablePadding>
              <ListItemButton
                selected={openCategory}
                onClick={handleCategoryToggle}
              >
                <ListItemText primary="Category" />
                {openCategory ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={openCategory} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {categories.map((category) => (
                  <ListItem key={category} disablePadding>
                    <Checkbox
                      checked={false}
                      onChange={() => console.log("test")}
                      color="primary"
                    />
                    <ListItemText primary={category} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
          <Divider />
          <React.Fragment>
            <ListItem disablePadding>
              <ListItemButton
                selected={openBrand}
                onClick={handleBrandToggle}
              >
                <ListItemText primary="Brand" />
                {openBrand ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={openBrand} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {brands.map((brand) => (
                  <ListItem key={brand} disablePadding>
                    <Checkbox
                      checked={false}
                      onChange={() => console.log("test")}
                      color="primary"
                    />
                    <ListItemText primary={brand} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
          <Divider />
        </List>
      </Box>
    </div>
  );
}
