import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { SortOption, RangeOption } from '../../types.ts';
import { setSortFilter, setRangeFilter, setCategoriesFilter, setBrandsFilter, clearFilters } from '../../Actions/productActions.tsx';

import { Product } from '../../types.ts';

import './Filter.scss';

type Anchor = 'top' | 'left' | 'bottom' | 'right';
const anchor: Anchor = 'left';

interface FilterProps {
  products: Product[];
}

const TemporaryDrawer: React.FC<FilterProps> = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [openPrice, setOpenPrice] = useState(false);
  const [openPriceRange, setOpenPriceRange] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openBrand, setOpenBrand] = useState(false);
  const [value, setValue] = useState<number[]>([20, 37]);
  const [priceSort, setPriceSort] = useState<SortOption>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);


  const { products }: { products: any } = useSelector((state: any) => state.products);

  const dispatch = useDispatch();

  const brands = Array.from(new Set(products?.products?.map((product: Product) => product.brand)));

  const fetchCategories = async () => {
    try {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    } catch (error) {
      
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handlePriceToggle = () => {
    setOpenPrice((prevOpenPrice) => !prevOpenPrice);
  };

  const handlePriceRangeToggle = () => {
    setOpenPriceRange((prevOpenPriceRange) => !prevOpenPriceRange);
  };

  const handleCategoryToggle = () => {
    setOpenCategory((prevOpenCategory) => !prevOpenCategory);
  };

  const handleBrandToggle = () => {
    setOpenBrand((prevOpenBrand) => !prevOpenBrand);
  };

  const handlePriceSort = (sortOption: SortOption) => {
    setPriceSort(sortOption);
    dispatch(setSortFilter(sortOption));
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    dispatch(setRangeFilter(newValue as RangeOption));
  };

  const handleCategoryChange = (category: string) => {
    const updatedSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    dispatch(setCategoriesFilter(updatedSelectedCategories));
    setSelectedCategories(updatedSelectedCategories);
  };

  const handleBrandChange = (brand: string) => {
    const updatedSelectedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    dispatch(setBrandsFilter(updatedSelectedBrands));
    setSelectedBrands(updatedSelectedBrands);
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
    setSelectedCategories([]);
    setSelectedBrands([]);
    setValue([0, 1000]); 
    setPriceSort(undefined);
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
          <React.Fragment>
              <ListItem disablePadding>
                <ListItemButton onClick={handleClearFilters}>
                  <ListItemText primary="Clear Filters" />
                </ListItemButton>
              </ListItem>
          </React.Fragment>
            <ListItem disablePadding>
              <ListItemButton selected={openPrice} onClick={handlePriceToggle}>
                <ListItemText primary="Price" />
                {openPrice ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={openPrice} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem disablePadding></ListItem>
                <ListItem disablePadding>
                  <Checkbox
                    checked={priceSort === SortOption.PRICE_ASC}
                    onChange={() => handlePriceSort(SortOption.PRICE_ASC)}
                  />
                  <ListItemText primary="Ascending" />
                </ListItem>
                <ListItem disablePadding>
                  <Checkbox
                    checked={priceSort === SortOption.PRICE_DESC}
                    onChange={() => handlePriceSort(SortOption.PRICE_DESC)}
                  />
                  <ListItemText primary="Descending" />
                </ListItem>
              </List>
            </Collapse>
          </React.Fragment>
          <Divider />
          <React.Fragment>
            <ListItem disablePadding>
              <ListItemButton selected={openPriceRange} onClick={handlePriceRangeToggle}>
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
                max={1000}
                min={0}
              />
            </Collapse>
          </React.Fragment>
          <Divider />
          <React.Fragment>
            <ListItem disablePadding>
              <ListItemButton selected={openCategory} onClick={handleCategoryToggle}>
                <ListItemText primary="Category" />
                {openCategory ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={openCategory} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {categories.map((category) => (
                  <ListItem key={category} disablePadding>
                    <Checkbox
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
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
              <ListItemButton selected={openBrand} onClick={handleBrandToggle}>
                <ListItemText primary="Brand" />
                {openBrand ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={openBrand} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {brands.map((brand) => (
                  <ListItem key={brand} disablePadding>
                    <Checkbox
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
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
};

export default TemporaryDrawer;
