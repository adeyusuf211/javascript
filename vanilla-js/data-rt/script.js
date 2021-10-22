fetch('data.json')
    .then(response => response.json())
    .then(data => {
        let nik = ``;
        const body = document.querySelector('.container .data');
        data.map(keluarga => {
            nik +=  `
                    <div class="nik">
                        <h5>${keluarga.DATA_KELUARGA.KELUARGA.NIK}</h5>
                        <h3>${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.Nama}</h3>
                    </div>
                    `;
        });
        body.innerHTML = nik;
    });

// let data =  `
//     <h2>RT/RW: ${keluarga.DATA_KELUARGA.KELUARGA.RT_RW}</h2>
//     <h3>Data: </h3>
//     <ul>
//         <ol>
//             <h3>LOKASI DAN PEMUKIMAN</h3>
//             <li>Alamat : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.Alamat}</li>
//             <li>NIK Kepala Keluarga : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.NIK_kepala_keluarga}</li>
//             <li>No.Hp : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.NO_Hp}</li>
//             <li>Status Rumah : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.Status_rumah}</li>
//             <li>Status Tanah : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.Status_tanah}</li>
//             <li>Luas Lantai : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.Luas_lantai}  Meter</li>
//             <li>Luas Tanah : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.Luas_tanah}  Meter</li>
//             <li>Jenis Lantai : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.Jenis_lantai}</li>
//             <li>Dinding : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.Dinding}</li>
//             <li>Jendela : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.Jendela}</li>
//             <li>Atap : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.Atap}</li>
//             <li>Penerangan Rumah : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.Penerangan_rumah}</li>
//             <li>Energi Memasak : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.Energi_memasak}</li>
//             <li>Pembuangan Sampah : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.Pembuangan_sampah}</li>
//             <li>MCK : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.MCK}</li>
//             <li>Fasilitas BAB : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.Fasilitas_BAB}</li>
//             <li>Sumber Air Mandi : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.Sumber_air_mandi}</li>
//             <li>Sumber Air Minum : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.Sumber_air_minum}</li>
//             <li>Pembuangan Air Limbah : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.Pembuangan_air_limbah}</li>
//             <li>Rumah Dibawah Sutet : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.Rumah_dibawah_sutet}</li>
//             <li>Rumah Dibantaran Sungai : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.Rumah_dibantaran_sungai}</li>
//             <li>Kondisi Rumah : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LOKASI_DAN_PEMUKIMAN.Kondisi_rumah}</li>
//         </ol>
//         <ol>
//             <h3>AKSES PENDIDIKAN</h3>
//             <h4>PAUD :</h4>
//             <li>Jarak Tempuh : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_PENDIDIKAN.Fasilitas.PAUD.Jarak_tempuh}</li>
//             <li>Waktu Tempuh : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_PENDIDIKAN.Fasilitas.PAUD.Waktu_tempuh}</li>
//             <li>Kemudahan : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_PENDIDIKAN.Fasilitas.PAUD.Kemudahan}</li>
//             <h4>Perguruan Tinggi :</h4>
//             <li>Jarak Tempuh : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_PENDIDIKAN.Fasilitas.Perguruan_Tinggi.Jarak_tempuh}</li>
//             <li>Waktu Tempuh : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_PENDIDIKAN.Fasilitas.Perguruan_Tinggi.Waktu_tempuh}</li>
//             <li>Kemudahan : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_PENDIDIKAN.Fasilitas.Perguruan_Tinggi.Kemudahan}</li>
//         </ol>
//         <ol>
//             <h3>AKSES KESEHATAN</h3>
//             <h4>Apotik :</h4>
//             <li>Jarak Tempuh : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_KESEHATAN.Fasilitas.Apotik.Jarak_tempuh}</li>
//             <li>Waktu Tempuh : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_KESEHATAN.Fasilitas.Apotik.Waktu_tempuh}</li>
//             <li>Kemudahan : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_KESEHATAN.Fasilitas.Apotik.Kemudahan}</li>
//             <h4>Posyandu :</h4>
//             <li>Jarak Tempuh : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_KESEHATAN.Fasilitas.Posyandu.Jarak_tempuh}</li>
//             <li>Waktu Tempuh : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_KESEHATAN.Fasilitas.Posyandu.Waktu_tempuh}</li>
//             <li>Kemudahan : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_KESEHATAN.Fasilitas.Posyandu.Kemudahan}</li>
//             <h4>Puskesmas :</h4>
//             <li>Jarak Tempuh : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_KESEHATAN.Fasilitas.Puskesmas.Jarak_tempuh}</li>
//             <li>Waktu Tempuh : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_KESEHATAN.Fasilitas.Puskesmas.Waktu_tempuh}</li>
//             <li>Kemudahan : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_KESEHATAN.Fasilitas.Puskesmas.Kemudahan}</li>
//             <h4>Rumah Sakit :</h4>
//             <li>Jarak Tempuh : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_KESEHATAN.Fasilitas.Rumah_Sakit.Jarak_tempuh}</li>
//             <li>Waktu Tempuh : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_KESEHATAN.Fasilitas.Rumah_Sakit.Waktu_tempuh}</li>
//             <li>Kemudahan : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_KESEHATAN.Fasilitas.Rumah_Sakit.Kemudahan}</li>
//         </ol>
//         <ol>
//             <h3>AKSES TENAGA KESEHATAN</h3>
//             <h4>Dokter Spesialis :</h4>
//             <li>Jarak Tempuh : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_TENAGA_KESEHATAN.Fasilitas.Dokter_Spesialis.Jarak_tempuh}</li>
//             <li>Waktu Tempuh : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_TENAGA_KESEHATAN.Fasilitas.Dokter_Spesialis.Waktu_tempuh}</li>
//             <li>Kemudahan : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_TENAGA_KESEHATAN.Fasilitas.Dokter_Spesialis.Kemudahan}</li>
//             <h4>Dokter Umum :</h4>
//             <li>Jarak Tempuh : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_TENAGA_KESEHATAN.Fasilitas.Dokter_Umum.Jarak_tempuh}</li>
//             <li>Waktu Tempuh : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_TENAGA_KESEHATAN.Fasilitas.Dokter_Umum.Waktu_tempuh}</li>
//             <li>Kemudahan : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_TENAGA_KESEHATAN.Fasilitas.Dokter_Umum.Kemudahan}</li>
//             <h4>Bidan :</h4>
//             <li>Jarak Tempuh : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_TENAGA_KESEHATAN.Fasilitas.Bidan.Jarak_tempuh}</li>
//             <li>Waktu Tempuh : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_TENAGA_KESEHATAN.Fasilitas.Bidan.Waktu_tempuh}</li>
//             <li>Kemudahan : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_TENAGA_KESEHATAN.Fasilitas.Bidan.Kemudahan}</li>
//         </ol>
//         <ol>
//             <h3>AKSES SARANA PRASARANA</h3>
//             <h4>Lokasi Pekerjaan Utama :</h4>
//             <li>Jenis Transportasi : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_SARANA_PRASARANA.Fasilitas.Lokasi_Pekerjaan_Utama.Jenis_Transportasi}</li>
//             <li>Penggunaan Transportasi Umum : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_SARANA_PRASARANA.Fasilitas.Lokasi_Pekerjaan_Utama.Penggunaan_Transportasi_Umum}</li>
//             <li>Waktu Tempuh Sekali Jalan : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_SARANA_PRASARANA.Fasilitas.Lokasi_Pekerjaan_Utama.Waktu_Tempuh_Sekali_Jalan}</li>
//             <li>Biaya Sekali Jalan : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_SARANA_PRASARANA.Fasilitas.Lokasi_Pekerjaan_Utama.Biaya_Sekali_Jalan}</li>
//             <li>Kemudahan : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_SARANA_PRASARANA.Fasilitas.Lokasi_Pekerjaan_Utama.Kemudahan}</li>
//             <h4>Sekolah :</h4>
//             <li>Jenis Transportasi : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_SARANA_PRASARANA.Fasilitas.Sekolah.Jenis_Transportasi}</li>
//             <li>Penggunaan Transportasi Umum : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_SARANA_PRASARANA.Fasilitas.Sekolah.Penggunaan_Transportasi_Umum}</li>
//             <li>Waktu Tempuh Sekali Jalan : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_SARANA_PRASARANA.Fasilitas.Sekolah.Waktu_Tempuh_Sekali_Jalan}</li>
//             <li>Biaya Sekali Jalan : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_SARANA_PRASARANA.Fasilitas.Sekolah.Biaya_Sekali_Jalan}</li>
//             <li>Kemudahan : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_SARANA_PRASARANA.Fasilitas.Sekolah.Kemudahan}</li>
//             <h4>Rekreasi Terdekat :</h4>
//             <li>Jenis Transportasi : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_SARANA_PRASARANA.Fasilitas.Rekreasi_Terdekat.Jenis_Transportasi}</li>
//             <li>Penggunaan Transportasi Umum : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_SARANA_PRASARANA.Fasilitas.Rekreasi_Terdekat.Penggunaan_Transportasi_Umum}</li>
//             <li>Waktu Tempuh Sekali Jalan : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_SARANA_PRASARANA.Fasilitas.Rekreasi_Terdekat.Waktu_Tempuh_Sekali_Jalan}</li>
//             <li>Biaya Sekali Jalan : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_SARANA_PRASARANA.Fasilitas.Rekreasi_Terdekat.Biaya_Sekali_Jalan}</li>
//             <li>Kemudahan : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.AKSES_SARANA_PRASARANA.Fasilitas.Rekreasi_Terdekat.Kemudahan}</li>
//         </ol>
//         <ol>
//             <h3>LAIN-LAIN</h3>
//             <h4>Lokasi Pekerjaan Utama :</h4>
//             <li>Jumlah Anggota Keluarga Yang Naik Kendaraan Umum (Sebulan Terakhir) : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LAIN_LAIN.Jumlah_Anggota_Keluarga_Yang_Naik_Kendaraan_Umum_Sebulan_Terakhir}</li>
//             <li>Jumlah Anggota Keluarga Yang Naik Kendaraan Umum (Bulan Sebelumnya) : ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LAIN_LAIN.Jumlah_Anggota_Keluarga_Yang_Naik_Kendaraan_Umum_Bulan_Sebelumnya}</li>
//             <h4>Penerima Program Pemerintah :</h4>
//             <li>BLT : ${(keluarga.DATA_KELUARGA.KELUARGA.DATA.LAIN_LAIN.Penerima_Program_Pemerintah.BLT ? "Ya" : "Tidak")}</li>
//             <li>Program Keluarga Harapan : ${(keluarga.DATA_KELUARGA.KELUARGA.DATA.LAIN_LAIN.Penerima_Program_Pemerintah.Program_Keluarga_Harapan ? "Ya" : "Tidak")}</li>
//             <li>Bantuan Sosial Tunai : ${(keluarga.DATA_KELUARGA.KELUARGA.DATA.LAIN_LAIN.Penerima_Program_Pemerintah.Bantuan_Sosial_Tunai ? "Ya" : "Tidak")}</li>
//             <li>Bantuan Presiden : ${(keluarga.DATA_KELUARGA.KELUARGA.DATA.LAIN_LAIN.Penerima_Program_Pemerintah.Bantuan_Presiden ? "Ya" : "Tidak")}</li>
//             <li>Bantuan UMKM : ${(keluarga.DATA_KELUARGA.KELUARGA.DATA.LAIN_LAIN.Penerima_Program_Pemerintah.Bantuan_UMKM ? "Ya" : "Tidak")}</li>
//             <li>Bantuan Untuk Pekerja : ${(keluarga.DATA_KELUARGA.KELUARGA.DATA.LAIN_LAIN.Penerima_Program_Pemerintah.Bantuan_Untuk_Pekerja ? "Ya" : "Tidak")}</li>
//             <li>Bantuan Pendidikan Anak : ${(keluarga.DATA_KELUARGA.KELUARGA.DATA.LAIN_LAIN.Penerima_Program_Pemerintah.Bantuan_Pendidikan_Anak ? "Ya" : "Tidak")}</li>
//             <li>Lainnya : ${(keluarga.DATA_KELUARGA.KELUARGA.DATA.LAIN_LAIN.Penerima_Program_Pemerintah.Lainnya ? "Ya" : "Tidak")}</li>
//             <h4>Pengeluaran</h4>
//             <li>Pengeluaran Satu Bulan: Rp. ${keluarga.DATA_KELUARGA.KELUARGA.DATA.LAIN_LAIN.Pengeluaran_Satu_Bulan}</li>
//         </ol>
//     </ul>
//             `;