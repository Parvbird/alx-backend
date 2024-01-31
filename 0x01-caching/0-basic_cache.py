#!/usr/bin/env python3
""" BaseCaching task
"""
from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """
    Define class for caching information in key-value pairs
    Methods:
        put(key, item) - store key-value pair
        get(key) - retrieve the value associated with key
    """

    def __init__(self):
        """
        Initialize class using parent class __init__ method
        """
        BaseCaching.__init__(self)

    def put(self, key, item):
        """
        Store key-value pair
        Args:
            Key
            Item
        """
        if key is None or item is None:
            pass
        else:
            self.cache_data[key] = item

    def get(self, key):
        """
        Return value linked to key.
        If key is 0 or doesn't exist, return None
        """
        if key is not None and key in self.cache_data.keys():
            return self.cache_data[key]
        return None
