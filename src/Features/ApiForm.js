import React, { useState } from 'react';
import useAxios from '../Context/API/UseAxios';
const ApiForm = () => {
    const [selecTinh, setSelecTinh] = useState(null);
    const [selecQuan, setSelecQuan] = useState(null);
  
    const getTinh = useAxios("https://esgoo.net/api-tinhthanh/1/01.htm");
    const getQuan = useAxios(
      `https://esgoo.net/api-tinhthanh/2/${selecTinh && selecTinh}.htm`
    );
    const getHuyen = useAxios(
      `https://esgoo.net/api-tinhthanh/3/${selecQuan && selecQuan}.htm`
    );
    const handleSelectTinh = (e) => {
      const selectedOption = e.target.options[e.target.selectedIndex];
      const getId = selectedOption.getAttribute("data-id-tinh");
      setSelecTinh(getId);
      setSelecQuan(null)
    };
    const handleSelectQuan = (e) => {
      const selectedOption = e.target.options[e.target.selectedIndex];
      const getId = selectedOption.getAttribute("data-id-quan");
      setSelecQuan(getId);
    };
    return (
        <>
              <div className="form-group">
                <label htmlFor="city">Tỉnh Thành</label>
                <select
                  id="city"
                  name="city"
                  onChange={handleSelectTinh}
                  required
                >
                  <option value="">Chọn tỉnh thành</option>
                  {getTinh.data &&
                    getTinh.data.map((item) => (
                      <option
                        key={item.id}
                        value={item.name}
                        data-id-tinh={item.id}
                      >
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="city">Quận/Huyện</label>

                <select
                  id="city"
                  name="city"
                  onChange={handleSelectQuan}
                  required
                >
                  <option value="">Chọn Quận/Huyện</option>
                  {getQuan.data &&
                    getQuan.data.map((item) => (
                      <option
                        key={item.id}
                        value={item.name}
                        data-id-quan={item.id}
                      >
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="city">Phường/Xã</label>
                <select id="city" name="city" required>
                  <option value="">Chọn Phường/Xã</option>
                  {getHuyen.data &&
                    getHuyen.data.map((item) => (
                      <option
                        key={item.id}
                        value={item.name}
                        data-id-quan={item.id}
                      >
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
        </>
    );
};

export default ApiForm;