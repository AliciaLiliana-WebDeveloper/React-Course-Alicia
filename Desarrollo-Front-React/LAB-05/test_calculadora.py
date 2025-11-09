import unittest
from calculadora import add, substract, multiply, divide

class TestCalculadora(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(3, 2), 5)
        self.assertEqual(add(-1, 1), 0)
        self.assertEqual(add(-1, -1), -2)
        self.assertAlmostEqual(add(2.5, 0.5), 3.0)

    def test_substract(self):
        self.assertEqual(substract(5, 3), 2)
        self.assertEqual(substract(-1, 1), -2)
        self.assertEqual(substract(-1, -1), 0)
        self.assertAlmostEqual(substract(2.5, 1.2), 1.3, places=7)

    def test_multiply(self):
        self.assertEqual(multiply(3, 4), 12)
        self.assertEqual(multiply(-1, 1), -1)
        self.assertEqual(multiply(-2, -3), 6)
        self.assertAlmostEqual(multiply(2.5, 0.2), 0.5, places=7)

    def test_divide(self):
        self.assertEqual(divide(6, 3), 2)
        self.assertAlmostEqual(divide(1, 3), 1.0/3.0, places=7)
        self.assertEqual(divide(-6, 3), -2)
        self.assertAlmostEqual(divide(2.5, 0.5), 5.0, places=7)

    def test_division_por_cero(self):
        with self.assertRaises(ValueError):
            divide(1, 0)
        with self.assertRaises(ValueError):
            divide(0, 0)

if __name__ == '__main__':
    unittest.main()
