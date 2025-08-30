import time

fn animate_text(text string, delay f64) {
    for c in text.runes() {
        print(c.str())
        time.sleep(delay * time.second)
    }
    println('')
}

fn sing_lyric(lyric string, delay f64, speed f64, line_delay f64) {
    time.sleep(delay * time.second)
    animate_text(lyric, speed)
    time.sleep(line_delay * time.second)
}

fn sing_song() {
    lyrics := [
        'Tante...',
        'Sudah terbiasa terjadi tante...',
        'Tenang datang cuma kalo butuh saja...',
        'Coba kalau lagi susah...',
        'Mereka semua menghilaaaaaaaaaaaaaaaaaaaaaaaaaaaaang...'
        'Tanteeee....'
    ]
    
    speeds := [0.08, 0.09, 0.08, 0.08, 0.09, 0.08]
    delays := [0.3, 1.5, 1.0, 0.5, 1.3, 0.3]
    
    for i in 0..lyrics.len {
        sing_lyric(lyrics[i], delays[i], speeds[i], 0)
    }
}

fn main() {
    sing_song()
}
